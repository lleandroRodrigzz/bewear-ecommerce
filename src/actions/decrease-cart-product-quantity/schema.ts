import { z } from "zod";

export const decraseCartProductQuantitySchema = z.object({
  cartItemId: z.uuid(),
});

export type DecraseCartProductQuantitySchema = z.infer<
  typeof decraseCartProductQuantitySchema
>;
