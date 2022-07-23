import { Warning } from "phosphor-react";
import { useFormContext } from "react-hook-form";

import {
  AddressInput,
  CityInput,
  ContainerInput,
  FormContainer,
  Input,
  StateInput,
  ErrorsContainer,
} from "./style";

interface IErrorsProps {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function Form() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as IErrorsProps;

  return (
    <FormContainer>
      <Input id="cep" placeholder="CEP" {...register("cep")} />
      <AddressInput placeholder="Endereço" {...register("address")} />
      <div>
        <Input placeholder="Número" {...register("number")} />
        <ContainerInput>
          <input placeholder="Complemento" {...register("complement")} />
          <p>Opcional</p>
        </ContainerInput>
      </div>
      <Input placeholder="Bairro" {...register("district")} />
      <CityInput placeholder="Cidade" {...register("city")} />
      <StateInput placeholder="UF" {...register("uf")} />
      <ErrorsContainer>
        {errors.cep && (
          <div>
            <Warning fontSize={20} />
            <span>{errors.cep?.message}</span>
          </div>
        )}
        {errors.address && (
          <div>
            <Warning fontSize={20} />
            <span>{errors.address?.message}</span>
          </div>
        )}
        {errors.number && (
          <div>
            <Warning fontSize={20} />
            <span>{errors.number?.message}</span>
          </div>
        )}
        {errors.district && (
          <div>
            <Warning fontSize={20} />
            <span>{errors.district?.message}</span>
          </div>
        )}
        {errors.city && (
          <div>
            <Warning fontSize={20} />
            <span>{errors.city?.message}</span>
          </div>
        )}
        {errors.uf && (
          <div>
            <Warning fontSize={20} />
            <span>{errors.uf?.message}</span>
          </div>
        )}
      </ErrorsContainer>
    </FormContainer>
  );
}
