import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  details?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string; // URL or placeholder
}

export interface NavItem {
  label: string;
  path: string;
}