export function getAllUniqueCategories(products) {
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

export function getCategoriesWithAllFilter(categories) {
    // const newArr = [...categories];
    // newArr.push(
    //     {
    //         translation: {
    //             ro: {
    //                 name: "Toate",
    //             },
    //             ru: {
    //                 name: "Все"
    //             }
    //         }
    //     }
    // )

    const initialObject = {
        translation: {
            ro: {
                name: "Toate",
            },
            ru: {
                name: "Все"
            }
        }
    };

    const newArr = [initialObject, ...categories]
    console.log(newArr);

    return newArr;
}