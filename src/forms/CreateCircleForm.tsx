import { z } from 'zod';

import { createForm } from './createForm';

const schema = z
  .object({
    user_name: z
      .string()
      .min(3, 'User name must be at least 3 characters long.'),
    circle_name: z
      .string()
      .min(3, 'Circle name must be at least 3 characters long.'),
    protocol_name: z
      .string()
      .min(3, 'User name must be at least 3 characters long.'),
    protocol_id: z.number().optional(),
    h_captcha_token: z.string().min(1, 'Please be a human.'),
    // TODO: Implment nested fields in createForm
    // Research Questions
    research_what_needs: z.string(),
    research_how_use: z.string(),
    research_org_structure: z.string(),
    research_org_link: z.string(),
    research_org_ens: z.string(),
    research_contact: z.string(),
  })
  .strict();

const CreateCircleForm = createForm({
  name: 'CreateCircleForm',
  getInstanceKey: () => 'new',
  getZodParser: () => schema,
  load: () => ({
    user_name: '',
    circle_name: '',
    protocol_name: '',
    protocol_id: undefined,
    h_captcha_token: '',
    research_what_needs: '',
    research_how_use: '',
    research_org_structure: '',
    research_org_link: '',
    research_org_ens: '',
    research_contact: '',
  }),
  fieldKeys: Object.keys(schema.shape),
  fieldProps: {},
});

export default CreateCircleForm;
