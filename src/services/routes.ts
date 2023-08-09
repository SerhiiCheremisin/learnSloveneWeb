export interface IRoutes {
    path: string,
    element: string,
    name: string
}

export const routes: IRoutes[] = [
   {
    path: '/',
    element: "Dicrionary",
    name: "Словник"
   }, 
   {
    path: '/training',
    element: "Training",
    name: "Тренування"
   }, 
   {
    path: '/grammar',
    element: "Grammar",
    name: "Граматика"
   }, 
   {
    path: '/user-dictionary',
    element: "UserDicrionary",
    name: "Обрані слова"
   }, 
]