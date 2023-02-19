function car_information(model_name,manufacturer_year,color,imported)
{
    carModel.model_name = model_name;
    carModel.manufacturer_year = manufacturer_year;
    carModel.color = color;
    carModel.imported = imported;
}

let carModel = {
    model_name: "",
    manufacturer_year: 32,
    color: "",
    imported: ""
};

car_information("BMW",2011,"Blue","Imported");