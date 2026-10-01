// уже СУЩЕСТВУЮЩИЙ товар, приходит от сервера
// используем GET 

export interface IProduct {
    id: string,
    name: string,
    price: number,
    description: string,
    stockQuantity: number,
}