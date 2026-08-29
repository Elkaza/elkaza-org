type ConditionalProviderFact = {
  applicable: boolean | null;
  value: string | null;
};

export interface ProviderFacts {
  operatorName: string | null;
  legalStatus: ConditionalProviderFact;
  address: {
    street: string | null;
    postalCode: string | null;
    locality: string | null;
    country: string | null;
  };
  publicEmail: string | null;
  registration: ConditionalProviderFact;
  vatId: ConditionalProviderFact;
  tradeAuthorization: ConditionalProviderFact;
  authority: ConditionalProviderFact;
  chamber: ConditionalProviderFact;
  serviceAreas: readonly string[];
}

// This object intentionally contains no guessed commercial facts. An owner-
// reviewed activation task must populate it before commercial content can pass
// the launch contract.
export const providerFacts: ProviderFacts = {
  operatorName: null,
  legalStatus: { applicable: null, value: null },
  address: {
    street: null,
    postalCode: null,
    locality: null,
    country: null,
  },
  publicEmail: null,
  registration: { applicable: null, value: null },
  vatId: { applicable: null, value: null },
  tradeAuthorization: { applicable: null, value: null },
  authority: { applicable: null, value: null },
  chamber: { applicable: null, value: null },
  serviceAreas: [],
};

function validateConditionalFact(name: string, fact: ConditionalProviderFact, errors: string[]) {
  if (fact.applicable === null) {
    errors.push(`${name} applicability has not been owner-reviewed`);
  } else if (fact.applicable && !fact.value?.trim()) {
    errors.push(`${name} is applicable but has no value`);
  }
}

export function validateProviderFactsForActivation(facts: ProviderFacts): string[] {
  const errors: string[] = [];

  if (!facts.operatorName?.trim()) errors.push("operator name is missing");
  if (!facts.address.street?.trim()) errors.push("street address is missing");
  if (!facts.address.postalCode?.trim()) errors.push("postal code is missing");
  if (!facts.address.locality?.trim()) errors.push("locality is missing");
  if (!facts.address.country?.trim()) errors.push("country is missing");
  if (!facts.publicEmail?.trim()) errors.push("public email is missing");
  if (facts.serviceAreas.length === 0) errors.push("service area is missing");

  validateConditionalFact("legal status", facts.legalStatus, errors);
  validateConditionalFact("registration", facts.registration, errors);
  validateConditionalFact("VAT/UID", facts.vatId, errors);
  validateConditionalFact("trade authorization", facts.tradeAuthorization, errors);
  validateConditionalFact("authority", facts.authority, errors);
  validateConditionalFact("chamber", facts.chamber, errors);

  return errors;
}
