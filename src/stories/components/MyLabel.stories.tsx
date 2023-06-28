import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";


export default {
    title: 'ds-nova/Buttons/Teco-Labels',
    tags: ['autodocs'],
    component: MyLabel

} as Meta<typeof MyLabel>

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const TecoLabel = Template.bind({})
TecoLabel.args ={
    label: 'Primary',
    size: 'h1',
    color: 'primary'
    
}
export const Secondary = Template.bind({});
Secondary.args= {
    label: 'Secondary',
    size: 'h2',
    color: 'secondary'
}

export const Terteary = Template.bind({});
Terteary.args={
    label: 'Terteary',
    size: 'h3',
    color: 'tertiary'
}

export const NoLabel = Template.bind({});
NoLabel.args = {
    label: 'no label',
    size: 'normal'
}
