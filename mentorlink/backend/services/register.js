import { DynamoDBClient, GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { buildResponse } from '../utils/util.js';
import bcrypt from 'bcryptjs';
const { hashSync } = bcrypt;
import { v4 as uuidv4 } from 'uuid';

const ddb = new DynamoDBClient({ region: 'us-east-2' });
const userTable = 'MentorLinkUsers';

async function register(userInfo) {
    const { email, password, name, username, bio, industry, interests, major, img_src, role, school, skills } = userInfo;//reverse access: userInfo.email, userInfo.password, userInfo.name, userInfo.username
    if (!email || !password || !name || !username || !industry || !role) {
        return buildResponse(401, { message: 'Missing the required fields' });//checking for missing fields
    }

    const dynamoUser = await getUser(username.toLowerCase().trim());//checking if user already exists
    if (dynamoUser && dynamoUser.username) {
        return buildResponse(401, { message: 'Username already exists! Please choose a different username.' });
    }
    const id = uuidv4();

    const encryptedPassword = hashSync(password.trim(), 10);//password is encrypted here
    const user = {
        email,
        password: encryptedPassword,
        name,
        username: username.toLowerCase().trim(),
        bio,
        industry,
        interests,
        major,
        profile_id: id,
        img_src,
        role,
        school,
        skills

    };

    //Now we save the new user object to the database
    const saveUserResponse = await saveUser(user);
    if (!saveUserResponse) {
        return buildResponse(503, { message: 'Server Error. Error saving user. Please try again later' });
    }

    return buildResponse(200, { username, message: 'User registered successfully.' });
}

async function getUser(username) {//DynamoDB operation getUser
    const params = {
        TableName: userTable,
        Key: {
            username: { S: username }
        }
    };

    try {
        const data = await ddb.send(new GetItemCommand(params));
        if (!data.Item) {
            return null;
        }
        return {
            email: data.Item.email.S,
            password: data.Item.password.S,
            name: data.Item.name.S,
            username: data.Item.username.S,

        };
    } catch (error) {
        console.error('There is an error in getUser: ', error);
        return null;
    }
}

async function saveUser(user) {//DynamoDB operation saveUser
    const params = {
        TableName: userTable,
        Item: {
            email: { S: user.email },
            password: { S: user.password },
            name: { S: user.name },
            username: { S: user.username },
            bio: { S: user.bio },
            industry: { S: user.industry },
            interests: { L: user.interests.map(interest => ({ S: interest })) },  // Correctly format the list
            major: { S: user.major },
            profile_id: { S: user.profile_id },
            prof_img_src: { S: user.img_src },
            role: { S: user.role },
            school: { S: user.school },
            skills: { L: user.skills.map(skill => ({ S: skill })) }  // Correctly format the list
        }
    };

    try {
        await ddb.send(new PutItemCommand(params));
        return true;
    } catch (error) {
        console.error('There is an error in saveUser: ', error);
        return false;
    }
}


const _register = register;
export { _register as register };
