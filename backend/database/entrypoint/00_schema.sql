--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_table_access_method = heap;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    product_id uuid NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    version integer NOT NULL
);


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    amount numeric NOT NULL,
    categories character varying[] NOT NULL,
    brand character varying NOT NULL,
    size numeric NOT NULL,
    quantity_in_stock integer NOT NULL,
    url_image character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    version integer NOT NULL
);


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.orders VALUES ('cf1143fb-0d41-4f06-a31a-2cf96c83c6ef', 'db481d47-9c2c-4da9-9fac-7e6607df5593', '2021-12-15 04:18:24.373429', '2021-12-15 04:18:24.373429', 1);
INSERT INTO public.orders VALUES ('566a3a4c-eaa4-4fb6-8768-a5b6da3ff490', 'db481d47-9c2c-4da9-9fac-7e6607df5593', '2021-12-15 04:18:41.841467', '2021-12-15 04:18:41.841467', 1);
INSERT INTO public.orders VALUES ('6f13c839-9580-4cc1-b294-e4d82d51ec5f', 'db481d47-9c2c-4da9-9fac-7e6607df5593', '2021-12-15 04:18:49.635319', '2021-12-15 04:18:49.635319', 1);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products VALUES ('17ac4c7d-9624-462b-8b1b-e040ea9887ea', 'Air Max 500', 'Tenis Nike Air Max 500', 600, '{tenis,pisante,500,esportes}', 'Nike', 39, 50, 'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%202.png', '2021-12-15 02:29:26.927805', '2021-12-15 02:29:26.927805', 0);
INSERT INTO public.products VALUES ('6b56180e-5a49-4d6e-98b0-6cc470ca3582', 'Air Max 600', 'Tenis Nike Pro Max 600', 360, '{tenis,sapatenis,corrida}', 'Adidas', 35, 63, 'https://http2.mlstatic.com/D_NQ_NP_916269-MLB46839740034_072021-W.jpg', '2021-12-15 02:30:48.23647', '2021-12-15 02:30:48.23647', 0);
INSERT INTO public.products VALUES ('db481d47-9c2c-4da9-9fac-7e6607df5593', 'Air Max', 'Tenis Nike Air Max', 500, '{tenis,pisante,esportes}', 'Nike', 40, 10, 'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%201.png', '2021-12-15 02:27:34.904964', '2021-12-15 02:27:34.904964', 0);


--
-- Name: products PK_0806c755e0aca124e67c0cf6d7d; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY (id);


--
-- Name: orders PK_710e2d4957aa5878dfe94e4ac2f; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

