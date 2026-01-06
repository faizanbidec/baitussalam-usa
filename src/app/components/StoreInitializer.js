"use client";

import { useEffect, useRef } from 'react';
import useServicesStore from '@/app/lib/stores/servicesStore';
import useProgramsStore from '@/app/lib/stores/programsStore';

export default function StoreInitializer() {
  const fetchServices = useServicesStore((state) => state.fetchServices);
  const fetchPrograms = useProgramsStore((state) => state.fetchPrograms);
  const services = useServicesStore((state) => state.services);
  const programs = useProgramsStore((state) => state.programs);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Only fetch once on mount if stores are empty
    if (!hasInitialized.current) {
      if (services.length === 0) {
        fetchServices();
      }
      if (programs.length === 0) {
        fetchPrograms();
      }
      hasInitialized.current = true;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null; // This component doesn't render anything
}

