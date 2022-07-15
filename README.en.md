English | [中文](./README.md)

### introduction

Visual creation of H5 page, one-click generation of VUE3 code

### Code flow

1. Click on the left component，Components are added to components in hooks，Each component has its own ID to facilitate the subsequent search for the component
2. After the component is added to the middle view section，You can click on components to edit properties
3. The component, when clicked, is added to the comDetail in hooks for right edits，Because the component references the same component after it has been looked up by id，So when you edit the comDetail content，Specific components in components are also changed
4. Each component has its own corresponding conversion to a specific label
5. Generate templates from the content in Components
6. Use Prettier to format the converted template
