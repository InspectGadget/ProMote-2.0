using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Filter
    {
        public Guid Id { get; set; }
        public Account Account { get; set; }
        public bool IsActive { get; set; }
        public Category Category { get; set; }
        public int MinSalary { get; set; }
        public bool IsVerified { get; set; }
        public string Experience { get; set; }
    }
}