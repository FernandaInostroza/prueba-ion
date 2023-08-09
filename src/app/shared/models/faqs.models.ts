export interface ApiResponseFaqs {
    ok:   boolean;
    faqs: FAQ[];
}

export interface FAQ {
    id:        number;
    question:  string;
    answer:    string;
    createdAt: Date;
    isCardExpanded?: boolean;
}