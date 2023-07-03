import { Meta, StoryFn } from "@storybook/react"
import { ActionsIcon } from "../../components/Icon"

export default {
    title: 'ds-nova/Icons/ActionsIcon',
    tags: ['autodocs'],
    component: ActionsIcon

} as Meta<typeof ActionsIcon>

const Template: StoryFn<typeof ActionsIcon> = (args) => <ActionsIcon {...args}/>

export const SysIconActionsLightFaBackwardStepIcon = Template.bind({})

SysIconActionsLightFaBackwardStepIcon.args ={
    color: 'blue',
    size: 'l',
   
    
}
SysIconActionsLightFaBackwardStepIcon.args ={
    color: 'blue',
    size: 'm',
   
    
}