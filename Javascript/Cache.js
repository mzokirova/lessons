const cache = new Map();
async function fetchUserData(userId) {

    if (cache.has(userId)) {
        console.log(`Retrieving user data for user ${userId} from cache...`);
        return userCache.get(userId);
    }
    console.log(`Fetching user data for user ${userId} from API...`);

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await response.json();

    cache.set(userId, userData);
    return userData
}

async function getUserData(userId) {
    try {
        const userData = await fetchUserData(userId);
        console.log("User data:", userData)
    }
    catch (error) {
        console.log("Error", error)
    }
}
getUserData(2);