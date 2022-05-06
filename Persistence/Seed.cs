using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<Account> userManager)
        {
            if(!userManager.Users.Any()){
                var users = new List<Account>{
                    new Account{DisplayName = "Bob", UserName = "bob", Email = "bob@test.com"},
                    new Account{DisplayName = "Tom", UserName = "tom", Email = "tom@test.com"},
                    new Account{DisplayName = "Jane", UserName = "jane", Email = "jane@test.com"}
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user,"Pa$$w0rd");
                }
            }
            bool IsEmpty = false;

            if(!context.Statuses.Any()){
                IsEmpty = true;
                var statuses = new List<Status>{
                    new Status{
                        Title = "In search of a employee"
                    },
                    new Status{
                        Title = "Doing"
                    },
                    new Status{
                        Title = "Done"
                    },
                    new Status{
                        Title = "Opened dispute"
                    }
                };
                await context.Statuses.AddRangeAsync(statuses);
            }

            if(!context.Companies.Any()){
                IsEmpty = true;
                var company = new List<Company>{
                    new Company{
                        Title = "Freelance",
                        Description = "For employees who don`t work at the company"
                    }
                };
                await context.Companies.AddRangeAsync(company);
            }

            if(!context.Categories.Any()){
                IsEmpty = true;
                var categories = new List<Category>{
                    new Category{
                        Title = "SEO"
                    },
                    new Category{
                        Title = "SMM"
                    },
                    new Category{
                        Title = "GoogleAds"
                    }
                };
                await context.Categories.AddRangeAsync(categories);
            }

            if(!context.Customers.Any()){
                IsEmpty = true;
                var auser = userManager.Users.First();
                var customers = new List<Customer>{
                    new Customer{
                        AccountId = auser.Id
                    }
                };
                await context.Customers.AddRangeAsync(customers);
            }

            if(!context.Employees.Any()){
                IsEmpty = true;
                var auser = userManager.Users.First();
                var acompany = context.Companies.First();
                var employees = new List<Employee>{
                    new Employee{
                        AccountId = auser.Id,
                        CompanyId = acompany.Id,
                        IsSubscribed = true
                    }
                };
                await context.Employees.AddRangeAsync(employees);
            }
            if(!context.Resources.Any()){
                IsEmpty = true;
                var acustomer = context.Customers.First();
                var resources = new List<Resource>{
                    new Resource{
                        Name = "Seed resource",
                        CustomerId = acustomer.Id
                    }
                };
                await context.Resources.AddRangeAsync(resources);
            }

            if(!context.Filters.Any()){
                IsEmpty = true;
                var aemployee = context.Employees.First();
                var acategory = context.Categories.First();
                var filters = new List<Filter>{
                    new Filter{
                        IsActive = true,
                        MinSalary = 1000,
                        IsVerified = false,
                        EmployeeId = aemployee.Id,
                        CategoryId = acategory.Id
                    }
                };
                await context.Filters.AddRangeAsync(filters);
            }

            if(!context.Jobs.Any()){
                IsEmpty = true;
                var aemployee = context.Employees.First();
                var acustomer = context.Customers.First();
                var acategory = context.Categories.First();
                var astatus = context.Statuses.First();
                var aresource = context.Resources.First(x => x.CustomerId == acustomer.Id);
                var jobs = new List<Job>{
                    new Job{
                        Title = "Seed job",
                        Description = "Seed job test description",
                        Salary = 2000,
                        StatusId = astatus.Id,
                        CategoryId = acategory.Id,
                        CustomerId = acustomer.Id,
                        EmployeeId = aemployee.Id,
                        ResourceId = aresource.Id
                    }
                };
                await context.Jobs.AddRangeAsync(jobs);
            }


            if(IsEmpty){
                await context.SaveChangesAsync();
            }
        }
    }
}