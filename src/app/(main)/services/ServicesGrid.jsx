'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchServices } from "@/slices/services.slice";
import { useDispatch, useSelector } from "react-redux";



export default function ServicesGrid() {
  const {data: services, isLoading, error} = useSelector(state => state.services)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const res = await axios.get('/api/services');
  //       setServices(res.data);
  //     } catch (error) {
  //       console.error('Error fetching services:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchServices();
  // }, []);

  useEffect(()=>{
    if(!services || services.length == 0){
      dispatch(fetchServices())
    }
  }, [dispatch, services])

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6">
            End to End <span className="text-primary">IT Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From development to deployment, we offer end-to-end IT services 
            to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.length > 0 && services.map((service) => {
            return (
              <Card 
                key={service._id}
                className="p-6 hover-elevate transition-all duration-200 h-full flex flex-col"
              >

                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-0.5 rounded-lg">
                      <img
                        src={service.icon}
                        width={40}
                        height={40}
                        alt={service.title}
                        className="flex-shrink-0"
                      />
                    </div>
                    <Badge 
                      className='bg-primary/10 text-primary border-primary/20'
                      data-testid={`badge-category-${service._id}`}
                    >
                      {service.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground flex-1" >
                    {service.shortDescription}
                  </p>
                  
                  <Link  href={`/services/${service.slug}`}>

                  <button 
                    className="mt-4 text-sm font-medium text-primary hover:text-primary/80 text-left"
                  >
                    Learn More →
                  </button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
