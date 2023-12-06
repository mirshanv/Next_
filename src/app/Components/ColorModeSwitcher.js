"use client"
import { ActionIcon, Group, useMantineColorScheme,MantineProvider } from '@mantine/core'
import { Sun, Moon } from "tabler-icons-react"

export function ColorModeSwitcher() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <MantineProvider>
        <Group position="centr" mt="xl">
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="2xl"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === "dark" ? theme.color.dark[6] : theme.color.grey[0],
                    color: theme.colorScheme === "dark" ? theme.color.yellow[4] : theme.color.blue[6]
                })}
            >
                {
                    colorScheme === "dark" ? (
                        <Sun size={20} />) : (
                        <Moon size={20} />
                    )
                }
            </ActionIcon>
        </Group>
        </MantineProvider>
    )
}