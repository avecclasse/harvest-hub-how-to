# App Idea: Harvest Hub — Powered by Devoir

## Overview

Harvest Hub is a customer-facing web application that allows people to reserve a weekly produce bundle while learning about the mission behind the food system and transparently tracking their order through a deterministic allocation process.

The application demonstrates how a community-supported produce system can coordinate limited supply fairly across households using a structured allocation engine.

The customer experience focuses on food access, community participation, and transparency, while the backend system models how an allocation engine assigns orders to pickup nodes based on capacity constraints.

This tutorial website will teach developers how to build the app step by step.

---

# Problem

Many communities face structural barriers to accessing fresh produce. Limited grocery options, transportation friction, and time constraints make it difficult for households to consistently obtain healthy food.

Traditional food distribution systems often lack transparency in how resources are allocated when supply is limited.

Customers typically see only a transactional interface rather than understanding how capacity, fairness, and community support affect distribution decisions.

---

# Proposed Solution

Harvest Hub provides a transparent and mission-driven produce reservation experience.

Customers can:

1. Reserve a produce bundle
2. Select a pricing tier that supports the community capacity pool
3. Learn about where the food comes from and why the system exists
4. Track how their order moves through the allocation system before pickup

The platform separates the **customer experience layer** from the **allocation infrastructure layer**.

The user interface focuses on food and community participation, while the backend models a coordination system that assigns orders to pickup nodes based on capacity constraints.

---

# Key Concept: Community Capacity Pool

The Community Capacity Pool allows different pricing tiers to support shared food access.

Customers choose one of three tiers:

### Equity Tier
A subsidized tier designed for households needing lower-cost access.

### Anchor Tier
The standard tier that reflects the baseline cost of producing and distributing the bundle.

### Steward Tier
A higher tier that helps fund additional bundles for the community capacity pool.

A simple dashboard shows:

- Bundles funded this week
- Households supported
- Progress toward the next distribution

---

# Core Features

## 1. Produce Bundle Reservation

Customers can:

- View a weekly produce bundle
- Read a description of what the bundle contains
- Select a pricing tier (Equity, Anchor, Steward)
- Reserve the bundle

For the bootcamp version, this is a **reservation flow only** and does not include real payment processing.

---

## 2. Community Capacity Pool Dashboard

A small dashboard explains how the tier system supports the community.

The dashboard displays:

- Total bundles funded
- Number of households supported
- Progress bar toward weekly capacity

This reinforces the mission behind the system rather than focusing only on transactions.

---

## 3. Learn Section

The app includes a simple learning section that explains the broader purpose of the system.

### Why This Exists
Explains food access challenges, transportation barriers, and why coordinated distribution matters.

### Where Produce Comes From
Describes sourcing transparency and how produce moves through local pickup nodes.

### What is Devoir
Explains the coordination system that ensures fair distribution when resources are limited.

---

## 4. Order Tracking

Instead of traditional delivery tracking, customers see how their order moves through a coordination process.

Tracking states include:

1. Order Received  
2. Entered Allocation Queue  
3. Assigned to Pickup Node  
4. Capacity Confirmed  
5. Ready for Pickup  

An optional transparency toggle shows simplified allocation information such as:

- Tier category
- Order timestamp
- Pickup node assignment
- Capacity snapshot

This demonstrates infrastructure visibility.

---

# Technical Concept

The system is structured with a clear separation between the user interface and the allocation engine.


Customer Browser
|
v
Harvest Hub Web App
|
v
Harvest Hub Server API
|
v
Devoir Allocation Logic


The frontend never performs allocation decisions.

The backend determines how orders are assigned to pickup nodes based on capacity.

---

# Data Models (Simplified)

## Order

Fields:

- id
- timestamp
- tier (equity / anchor / steward)
- status
- assigned_node

---

## Node

Fields:

- id
- name
- capacity
- remaining_capacity

---

## Allocation Result

Fields:

- order_id
- assigned_node
- allocation_status
- capacity_snapshot

---

# MVP Scope (Bootcamp Version)

The tutorial will guide developers to build:

- A homepage
- Produce bundle reservation page
- Community capacity pool dashboard
- Learn section pages
- Order tracking page
- Mock allocation logic
- Simple backend API routes

---

# Out of Scope

To keep the project simple for the bootcamp, the following features are excluded:

- Payment processing
- External API integrations
- Maps or geolocation
- Email notifications
- Image uploads
- Admin dashboards
- Background job infrastructure

The tutorial focuses on the core user experience and the concept of a deterministic allocation system.

---

# Why This Project is Interesting

Most tutorial apps focus only on CRUD functionality.

This project demonstrates a different type of system:

- Coordinating limited resources
- Modeling fairness in distribution
- Separating infrastructure logic from customer experience

It shows how a mission-driven application can still be built using modern web development practices.

---

# Tutorial Goal

By following the tutorial, developers will learn how to:

- Build a Next.js application
- Structure a frontend and backend boundary
- Model resource allocation systems
- Create a transparent customer experience around infrastructure

The final result will be a working demo of the Harvest Hub experience powered by a simplified version of the Devoir allocation concept.