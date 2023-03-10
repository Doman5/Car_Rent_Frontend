export interface RentDto {
    carId: number,
    grossValue: number,
    rentalPrice: number,
    returnPrice: number,
    deposit: number,
    rentalPlace: string,
    returnPlace: string,
    rentalDate: Date,
    returnDate: Date,
    paymentId: number
}