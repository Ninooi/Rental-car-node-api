import { request, response } from "express";

class ListCategoriesController {
    handle(request: Request, response: Response): Response {
        const all = categoriesRepository.list();

        return response.json(all);
    }
}
export { ListCategoriesController };
