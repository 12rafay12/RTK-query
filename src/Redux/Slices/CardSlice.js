import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CardSlice = createApi({
  reducerPath: "getCards",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65fc0f1014650eb2100b69bc.mockapi.io",
  }),
  tagTypes: ["Cards"],
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => `/cards`,
      providesTags: ["Cards"],
    }),
    getCard: builder.query({
      query: (id) => `/cards/${id}`,
      providesTags: ["Cards"],
    }),
    deleteCard: builder.mutation({
      query: (cardId) => ({
        url: `/cards/${cardId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cards"],
    }),
    editCard: builder.mutation({
      query: (cardId) => ({
        url: `/cards/${cardId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Cards"],
    }),
  }),
});

export const {
  useGetCardsQuery,
  useDeleteCardMutation,
  useEditCardMutation,
  useGetCardQuery,
} = CardSlice;
