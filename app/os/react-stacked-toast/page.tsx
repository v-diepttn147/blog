'use client'

import Button from '@/components/Button'
import { Code } from '@/components/Code'
import React from 'react'
import toast from 'react-stacked-toast'

interface Example {
  id: string
  name: string
  action: () => void
  snippet: string
}

const examples: Example[] = [
  {
    id: '1',
    name: 'Default',
    action: () => {
      toast({
        title: 'Default Toast',
        description: 'This is a default toast',
      })
    },
    snippet: `
      toast({
        title: 'Default Toast',
        description: 'This is a default toast',
      })
    `,
  },
  {
    id: '2',
    name: 'Success',
    action: () => {
      toast.success({
        title: 'Success Toast',
        description: 'This is a success toast',
      })
    },
    snippet: `
      toast.success({
        title: 'Success Toast',
        description: 'This is a success toast',
      })
    `,
  },
  {
    id: '3',
    name: 'Error',
    action: () => {
      toast.error({
        title: 'Error Toast',
        description: 'This is an error toast',
      })
    },
    snippet: `
      toast.error({
        title: 'Error Toast',
        description: 'This is an error toast',
      })
    `,
  },
]

export default function ReactStackedToast() {
  const [example, setExample] = React.useState<Example>(examples[0])

  const handleClickExample = (example: Example) => {
    setExample(example)
    example.action()
  }

  return (
    <div>
      <p className="mb-8 text-center text-5xl font-bold">react-stacked-toast</p>

      <div className="grid grid-cols-2 gap-x-5">
        <div className="grid grid-cols-4 content-start gap-5">
          {examples.map((example) => (
            <Button onClick={() => handleClickExample(example)} key={example.id}>
              {example.name}
            </Button>
          ))}
        </div>

        <div>
          <Code snippet={example.snippet} />
        </div>
      </div>
    </div>
  )
}
