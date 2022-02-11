using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            bool IsEmpty = false;

            if(!context.Roles.Any()){
                IsEmpty = true;
                var roles = new List<Role>{
                    new Role{
                        Name = "Regular"
                    },
                    new Role{
                        Name = "Admin"
                    }
                };
                await context.Roles.AddRangeAsync(roles);
            }

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

            if(IsEmpty){
                await context.SaveChangesAsync();
            }
        }
    }
}