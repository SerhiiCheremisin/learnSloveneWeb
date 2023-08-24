import { ILocalStorageData, IAPIRoutes } from "./types";

export const commonURL = "http://localhost:3300/";

export const APIRoutes: IAPIRoutes = {
  addUser: "add-user",
  findAllUsers: "find-all-users",
  addNewWord: "add-new-word",
  findOneUser: "find-one-user"
}

export const sendNewUserToDB = async (data:ILocalStorageData):Promise<any> => {
   const request = await fetch (`${commonURL}${APIRoutes.addUser}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
   });
   const response = await request.json();
   return response
}

export const findAlUsersFromDB = async ():Promise<any> => {
    const request = await fetch(`${commonURL}${APIRoutes.findAllUsers}`);
    const response = await request.json();
    return response;
}

export const addWordToDictionatyToDB = async (array: any[], name: string):Promise<any> => {
   const sendBody = {
      arrayToDB: array,
      userName: name
   };
const request = await fetch (`${commonURL}${APIRoutes.addNewWord}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(sendBody)
});
const response = await request.json();
return response
}

export const findOneUserFromDB = async (name:string):Promise<any> => {
  const request = await fetch(`${commonURL}${APIRoutes.findOneUser}/${name}`);
  const response = await request.json();
  return response;
}