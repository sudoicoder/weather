import { createContext, forwardRef, useContext, useId } from "react"
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form"
import { Controller, FormProvider, useFormContext } from "react-hook-form"
import { Slot } from "@radix-ui/react-slot"

import { Label as BaseLabel } from "@/components/ui/Label"

import { cn } from "@/utilities/shadcn"

export const Form = <
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  props: React.ComponentProps<
    typeof FormProvider<TFieldValues, TContext, TTransformedValues>
  >
) => <FormProvider {...props} />

type FieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FieldContext = createContext<FieldContextValue | undefined>(undefined)

const Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FieldContext.Provider>
  )
}

const useField = () => {
  const field = useContext(FieldContext)
  if (!field) {
    throw new Error("useField should be used within <Form.Field>")
  }
  const item = useContext(ItemContext)
  if (!item) {
    throw new Error("useField should be used within <Form.Item>")
  }
  const { getFieldState, formState } = useFormContext()
  return {
    formDescriptionId: `${item.id}-form-item-description`,
    formItemId: `${item.id}-form-item`,
    formMessageId: `${item.id}-form-item-message`,
    id: item.id,
    name: field.name,
    ...getFieldState(field.name, formState),
  }
}

type ItemContextValue = {
  id: string
}

const ItemContext = createContext<ItemContextValue | undefined>(undefined)

const Item = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId()
    return (
      <ItemContext.Provider value={{ id }}>
        <div
          ref={ref}
          className={cn("space-y-2", className)}
          {...props}
        />
      </ItemContext.Provider>
    )
  }
)
Item.displayName = "Form/Item"

const Label = forwardRef<
  React.ElementRef<typeof BaseLabel>,
  React.ComponentPropsWithoutRef<typeof BaseLabel>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useField()
  return (
    <BaseLabel
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
Label.displayName = "Form/Label"

const Control = forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useField()
  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
Control.displayName = "Form/Control"

const Description = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useField()
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
Description.displayName = "Form/Description"

const Message = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useField()
  const body = error ? String(error?.message) : children
  if (!body) {
    return null
  }
  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
Message.displayName = "Form/Message"

Form.Control = Control
Form.Description = Description
Form.Field = Field
Form.Item = Item
Form.Label = Label
Form.Message = Message
