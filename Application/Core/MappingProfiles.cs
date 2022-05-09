using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Jobs;
using AutoMapper;
using Domain;


namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Job, JobDto>()
                .ForMember(j => j.Status, o => o.MapFrom(s => s.Status.Title))
                .ForMember(j => j.Category, o => o.MapFrom(s => s.Category.Title))
                .ForMember(j => j.Customer, o => o.MapFrom(c => c.Customer.Account.DisplayName))
                .ForMember(j => j.Image, o => o.MapFrom(c => c.Customer.Account.Image))
                .ForMember(j => j.Resource, o => o.MapFrom(r => r.Resource.Name));
        }
    }
}