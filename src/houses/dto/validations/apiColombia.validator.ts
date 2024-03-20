
export class ApiValidation{

  async validateState(state: string): Promise<boolean> {
    try {
      var response = await fetch('https://api-colombia.com/api/v1/Department')
      var departments = await response.json()
      const validState = departments.some(department => department.name.toUpperCase().includes(state.toUpperCase()));
      return validState;
    } catch (error) {
      console.error(`Error al validar el departamento: ${error.message}`);
      throw error;
    }
  }

  async validateCity(city: string): Promise<boolean> {
    try {
      var response = await fetch('https://api-colombia.com/api/v1/City');
      var cities = await response.json()
      const validCity = cities.some(town => town.name.toUpperCase().includes(city.toUpperCase()));
      return validCity;
    } catch (error) {
      console.error(`Error al validar la ciudad: ${error.message}`)
      throw error;
    }
  }
}
