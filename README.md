
This document provides a technical overview of the Mentes Sanas website, a psychology services platform built with Astro. The system offers information about psychological services, practitioner details, location information, and contact functionality for potential clients.

For detailed information about the system configuration and deployment, see Architecture.

Purpose and Technology Stack
The Mentes Sanas platform serves as a professional website for psychology services with the following core functionality:

Showcase of psychology services with detailed information pages
Psychologist profile and background information
Interactive location map and social media integration
Contact form with server-side email processing
The system is built on the following technology stack:

Technology	  Version	        Purpose
Astro	          5.7.4	        Core framework for pages and routing
Tailwind CSS	  4.1.4	        Styling and responsive design
Leaflet.js	    1.9.4	        Interactive map functionality
Resend	        4.3.0	        Email sending service
Vercel	        8.1.3	        Deployment platform
Sources: 
package.json 1-25
src/layouts/Layout.astro 1-34

System Architecture
The Mentes Sanas website follows a component-based architecture using Astro's page and component structure.

High-Level Architecture Diagram

![image](https://github.com/user-attachments/assets/3f1942f3-b0ae-41dc-8c47-b022f04e57eb)

Page Structure and Component Hierarchy
The website is organized around a set of pages that import and compose various components.

Page Structure Diagram
![image](https://github.com/user-attachments/assets/20850134-a1e9-4ae3-be2d-12c74887ccac)

Sources: 
src/pages/index.astro 1-13
src/pages/about.astro 1-46
src/layouts/Layout.astro 8-34

Core Components
Layout System
The Layout.astro component provides the common structure for all pages, including:

HTML document structure
Metadata and favicon
Global styles
Leaflet map library integration
Header and Footer components
Main content area with slot for page content
CSS animations and responsive design styles
![image](https://github.com/user-attachments/assets/eab67ebb-cfe5-447e-b8d9-05d5df535440)
Sources: 
src/layouts/Layout.astro 1-188

Home Page Components
The home page (index.astro) assembles three main components:

Hero.astro - Hero section with introduction and call-to-action
Servicios.astro - Services listing with service cards
Redes.astro - Location map and social media integration
This structure follows a common marketing website pattern, presenting key information in a sequence designed to engage visitors.
![image](https://github.com/user-attachments/assets/503a502b-1c07-4c36-8a12-391ceb7d20e9)

Sources: 
src/pages/index.astro 1-13

About Page
The about page presents information about "Eliza-chan", the psychologist:

Professional background and approach
Personal interests and philosophy
Styling with Tailwind CSS classes
Responsive layout with different designs for mobile and desktop
This page uses a responsive layout with different positioning for desktop and mobile views, displaying text alongside an image of the psychologist.

Sources: 
src/pages/about.astro 1-46

Data Flow
The following diagram illustrates data flow through the Mentes Sanas system:
![image](https://github.com/user-attachments/assets/aa933de6-d934-4553-ac85-d5582f68a5a0)

Sources: 
package.json 11-18
src/layouts/Layout.astro 14-23

Styling and User Experience
The site uses Tailwind CSS for styling, supplemented by custom CSS animations and interactions:

CSS animations for hover effects (elastic-ultrasoft, squeeze, etc.)
Responsive design with media queries for different screen sizes
Custom styling for form elements (inputs, textareas)
Background gradient effects and visual enhancements
The styling approach combines utility-first Tailwind classes with custom global styles for specific animations and effects, maintaining a consistent visual identity.

Sources: 
src/layouts/Layout.astro 36-188

