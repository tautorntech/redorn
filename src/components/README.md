## THIS FILE SHOULD CONTAIN ALL COMPONENTS FROM THIS PROJECT

These files were spreaded in **dumb** and **smart** components.

A simple instruction about that:

## Smart

Smart components are all components than contains either own state or business logic.

Example:

* Header
* Form Simulation than contains rules about a credit simulation

## Dumb

Dumb components are all pure components. They even can contain some internal state, but this one must be very simple and unique. Normally, a dumb component just receives external props and state to be rendered.

Important, a dumb component NEVER must-have business logic.

Example:

* Button
* Dialog
* Card
* Typography