type User = {
    email: string;
    password: string;
};

const users: User[] = [];

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
    return users.find(user => user.email === email);
};

export const createUser = async (email: string, password: string): Promise<User> => {
    const newUser = { email, password };
    users.push(newUser);
    return newUser;
};
