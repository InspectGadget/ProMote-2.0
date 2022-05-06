using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class Account : IdentityUser
    {
        public string DisplayName { get; set; }
        public string Bio { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Image { get; set; }

        public Employee Employee { get; set; }

        public Customer Customer { get; set; }

    }
}