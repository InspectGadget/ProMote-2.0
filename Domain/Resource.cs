using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Resource
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public Customer Customer { get; set; }
        public string Link { get; set; }
    }
}