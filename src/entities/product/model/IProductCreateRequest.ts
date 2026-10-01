
// данные, которые мы отправляем с реакта на сервер, чтобы СОЗДАТЬ ТОВАР
// нет id , потому что его создаёт бэкенд   Id = Guid.NewGuid()
// используем POST

export interface IProductCreateRequest {
    name: string,
    price: number,
    description: string,
    stockQuantity: number;
}