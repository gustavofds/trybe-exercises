Employee.associate = (models) => {
  Employee.hasOne(models.Address,
    { foreignKey: 'employee_id', as: 'addresses' });
};

return Employee;
