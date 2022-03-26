async update(category) {
    if (!category._id) {
        throw new Error("не указан ID");
    }

    const languages = ["ru", "ro"];

    const oldCategory = await Categories.findById(category._id);

    for(let lang of languages) {
        if(oldCategory.translation.lang.name != category.translation.lang.name){
            const productsToChange = await Product.find(oldCategory.translation.lang);
            productsToChange.forEach(product => {
                product.translation.lang.category = category.translation.lang.name;
                ProductService.update(product);
            });
        }
    }

    const updatedCategory = await Categories.findByIdAndUpdate(
        category._id,
        category,
        { new: true }
    );

    return updatedCategory;
}