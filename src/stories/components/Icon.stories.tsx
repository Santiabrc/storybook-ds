import { Meta, StoryFn } from "@storybook/react"
import { ActionsIcon } from "../../components/Icon"
import { useState } from "react";
import Modal from "react-modal";
import { ActionsIcon1 } from "../../components/Icon1";
import { ActionsIcon2 } from "../../components/Icon2";
import "./modal.css";

export default {
    title: 'ds-nova/Icons/ActionsIcon',
    tags: ['autodocs'],
    component: ActionsIcon
} as Meta<typeof ActionsIcon>

const Template: StoryFn<typeof ActionsIcon> = (args) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIconCode, setSelectedIconCode] = useState('');
    const [selectedIconName, setSelectedIconName] = useState("");

    return (
        <>
            <ActionsIcon
                {...args}
                onClick={() => {
                    setSelectedIconName("Icono 1");
                    setSelectedIconCode(ActionsIcon.toString());
                    setIsModalOpen(true);
                }}
            />

            <ActionsIcon1
                {...args}
                onClick={() => {
                    setSelectedIconName("Icono 2");
                    setSelectedIconCode(ActionsIcon1.toString());
                    setIsModalOpen(true);
                }}
            />

            <ActionsIcon2
                {...args}
                onClick={() => {
                    setSelectedIconName("Icono 3");
                    setSelectedIconCode( ActionsIcon2.toString());
                    setIsModalOpen(true);
                }}
            />

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Icon Code Modal"
            >
                <h3>{selectedIconName}</h3>
                <div className="code">{selectedIconCode}</div>
            </Modal>
        </>
    );
};

export const ActionsVideoIcons = Template.bind({})

ActionsVideoIcons.args = {
    color: 'blue',
    size: 'l',
}
