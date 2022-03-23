export function getAllCategories(products) {
    let allCategories = [];
    for (let product of products) {
        if (
            !allCategories.some(
                (category) =>
                    category.translation.ru.name === product.translation.ru.category &&
                    category.translation.ro.name === product.translation.ro.category
            )
        ) {
            allCategories.push({
                translation: {
                    ru: {name: product.translation.ru.category},
                    ro: {name: product.translation.ro.category},
                },
            });
        }
    }
    return allCategories;
}