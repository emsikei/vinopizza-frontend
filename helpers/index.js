export const getAllUniqueCategories = (products) => {
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
                    ru: { name: product.translation.ru.category },
                    ro: { name: product.translation.ro.category },
                },
            });
        }
    }
    return allCategories;
}

export const getCategoriesWithAllFilter = (categories) => {
    const initialObject = {
        _id: "123",
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
    
    return newArr;
}

export const validateCategory = (values) => {
    const errors = { ru: {}, ro: {} };

    if (!values.translation.ru.name) {
        errors.ru.name = "Название категории обязательно!"
    }

    if (!values.translation.ro.name) {
        errors.ro.name = "Numele categories este obligatoriu!"
    }

    return errors;
}

export const validateProduct = (values) => {
    const errors = { 
        translation: {
            ro: {},
            ru: {}
        },
        price: 0,
        category: "",
        image: null
     };

    if (!values.translation.ru.name) {
        errors.translation.ru.name = "Введите название продукта!"
    }

    if (!values.translation.ro.name) {
        errors.translation.ro.name = "Introduceți numele produsului!"
    }

    if (!values.translation.ru.description) {
        errors.translation.ru.description = "Введите описание продукта!"
    }

    if (!values.translation.ro.description) {
        errors.translation.ro.description = "Introduceți descriere produsului!"
    }

    if (!values.translation.ru.metrics) {
        errors.translation.ru.metrics = "Введите измерения!"
    }

    if (!values.translation.ro.metrics) {
        errors.translation.ro.metrics = "Introduceți măsura!"
    }

    if (!values.price) {
        errors.price = "Introduceți prețul!"
    }

    if (!values.image) {
        errors.image = "Alegeți imagine!"
    }

    if (!values.category) {
        errors.category = "Alegeți categorie!"
    }

    return errors;
}