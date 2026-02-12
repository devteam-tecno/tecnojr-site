import{j as e}from"./jsx-runtime-DVhjNUKw.js";import{c as u}from"./utils-CDN07tui.js";import"./iframe-CTDfU54N.js";import"./preload-helper-PPVm8Dsz.js";function a({className:d,...c}){return e.jsx("textarea",{"data-slot":"textarea",className:u("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",d),...c})}a.__docgenInfo={description:`Multi-line text input component with consistent styling and validation states.

Features auto-expanding behavior with \`field-sizing-content\`, focus rings,
aria-invalid styling for form validation, and disabled state support.

@example
// Basic usage
<Textarea placeholder="Enter your message..." />

@example
// With React Hook Form and validation
<form>
  <Textarea
    {...register("message", { required: true })}
    aria-invalid={!!errors.message}
  />
</form>

@example
// Controlled with minimum height
<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  className="min-h-32"
/>

@see https://react-hook-form.com/ - For form integration`,methods:[],displayName:"Textarea"};const g={title:"UI/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{placeholder:"Enter your message..."}},r={args:{value:"This is a sample message with some text. The textarea will automatically expand as you type more content.",readOnly:!0}},t={args:{placeholder:"This textarea is disabled",disabled:!0}},n={args:{placeholder:"Enter your message...","aria-invalid":!0,value:"This message has an error"}},l={args:{placeholder:"This textarea has a custom minimum height",className:"min-h-32"}},o={render:()=>e.jsxs("form",{className:"w-100 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"mb-2 block text-sm font-medium",children:"Message"}),e.jsx(a,{id:"message",placeholder:"Enter your message..."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"feedback",className:"mb-2 block text-sm font-medium",children:"Feedback"}),e.jsx(a,{id:"feedback",placeholder:"Share your thoughts...",className:"min-h-24"})]}),e.jsx("button",{type:"submit",className:"rounded-md bg-primary px-4 py-2 text-primary-foreground",children:"Submit"})]})},i={render:()=>e.jsxs("div",{className:"w-100 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"valid-message",className:"mb-2 block text-sm font-medium",children:"Valid Message"}),e.jsx(a,{id:"valid-message",placeholder:"This is valid...",value:"This message is valid and meets all requirements."}),e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:"Looks good!"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"invalid-message",className:"mb-2 block text-sm font-medium",children:"Invalid Message"}),e.jsx(a,{id:"invalid-message",placeholder:"This is invalid...","aria-invalid":!0,value:"Too short"}),e.jsx("p",{className:"mt-1 text-sm text-destructive",children:"Message must be at least 10 characters"})]})]})},m={render:()=>e.jsxs("form",{className:"w-125 space-y-6 rounded-lg border p-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Contact Us"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"mb-2 block text-sm font-medium",children:"Name"}),e.jsx("input",{id:"name",type:"text",placeholder:"Your name",className:"w-full rounded-md border bg-transparent px-3 py-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm font-medium",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"your@email.com",className:"w-full rounded-md border bg-transparent px-3 py-2"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"mb-2 block text-sm font-medium",children:"Message"}),e.jsx(a,{id:"message",placeholder:"Tell us about your project...",className:"min-h-32"})]}),e.jsx("button",{type:"submit",className:"w-full rounded-md bg-linear-primary px-4 py-2 font-medium text-white",children:"Send Message"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your message..."
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: "This is a sample message with some text. The textarea will automatically expand as you type more content.",
    readOnly: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "This textarea is disabled",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your message...",
    "aria-invalid": true,
    value: "This message has an error"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "This textarea has a custom minimum height",
    className: "min-h-32"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <form className="w-100 space-y-4">
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea id="message" placeholder="Enter your message..." />
      </div>
      <div>
        <label htmlFor="feedback" className="mb-2 block text-sm font-medium">
          Feedback
        </label>
        <Textarea id="feedback" placeholder="Share your thoughts..." className="min-h-24" />
      </div>
      <button type="submit" className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
        Submit
      </button>
    </form>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-100 space-y-4">
      <div>
        <label htmlFor="valid-message" className="mb-2 block text-sm font-medium">
          Valid Message
        </label>
        <Textarea id="valid-message" placeholder="This is valid..." value="This message is valid and meets all requirements." />
        <p className="mt-1 text-sm text-muted-foreground">Looks good!</p>
      </div>
      <div>
        <label htmlFor="invalid-message" className="mb-2 block text-sm font-medium">
          Invalid Message
        </label>
        <Textarea id="invalid-message" placeholder="This is invalid..." aria-invalid={true} value="Too short" />
        <p className="mt-1 text-sm text-destructive">
          Message must be at least 10 characters
        </p>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <form className="w-125 space-y-6 rounded-lg border p-6">
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input id="name" type="text" placeholder="Your name" className="w-full rounded-md border bg-transparent px-3 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input id="email" type="email" placeholder="your@email.com" className="w-full rounded-md border bg-transparent px-3 py-2" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea id="message" placeholder="Tell us about your project..." className="min-h-32" />
      </div>
      <button type="submit" className="w-full rounded-md bg-linear-primary px-4 py-2 font-medium text-white">
        Send Message
      </button>
    </form>
}`,...m.parameters?.docs?.source}}};const v=["Default","WithValue","Disabled","WithError","CustomHeight","InForm","WithValidation","ContactForm"];export{m as ContactForm,l as CustomHeight,s as Default,t as Disabled,o as InForm,n as WithError,i as WithValidation,r as WithValue,v as __namedExportsOrder,g as default};
