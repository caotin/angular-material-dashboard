
export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price: [Price];
    comment: [Comment];
    discount: number;
    category: string;
    userId: string;
    timestamp: number;
}

export interface Comment {
    email: string;
    content: string;
    fullname: string;
}

export interface Price {
    size: number;
    price: number;
}

export interface User {
    userId: string;
    email: string;
    fullname: string;
    address: string;
    phoneNumber: string;
}
