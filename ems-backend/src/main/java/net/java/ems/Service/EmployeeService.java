package net.java.ems.Service;

import net.java.ems.dto.EmployeeDto;
import org.yaml.snakeyaml.events.Event;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long employeeId);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(Long emplyeeId, EmployeeDto updatedEmployee);
    void deleteEmployee(Long employeeId);
}

