import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationAlredyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlredyExists) {
            throw new Error("Specification alredy exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
