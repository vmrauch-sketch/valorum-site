import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Valorum Capital & Patrimônio'

interface LeadContactNotificationProps {
  name?: string
  email?: string
  phone?: string
  company?: string
}

const LeadContactNotificationEmail = ({
  name = 'Não informado',
  email = 'Não informado',
  phone,
  company,
}: LeadContactNotificationProps) => (
  <Html lang="pt-BR" dir="ltr">
    <Head />
    <Preview>Nova solicitação de consultoria de {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nova solicitação de consultoria</Heading>
        <Text style={text}>Um novo lead solicitou consultoria pelo site {SITE_NAME}.</Text>
        <Hr style={hr} />
        <Section style={detailsBox}>
          <Text style={label}>Nome</Text>
          <Text style={value}>{name}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email}</Text>
          {phone && (
            <>
              <Text style={label}>Telefone / WhatsApp</Text>
              <Text style={value}>{phone}</Text>
            </>
          )}
          {company && (
            <>
              <Text style={label}>Empresa</Text>
              <Text style={value}>{company}</Text>
            </>
          )}
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Este email foi enviado automaticamente pelo site {SITE_NAME}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: LeadContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    `Nova solicitação de consultoria – ${data?.name || 'Novo lead'}`,
  displayName: 'Notificação de lead - Consultoria',
  to: 'contato@cfvalorum.com.br',
  previewData: {
    name: 'João Silva',
    email: 'joao@exemplo.com',
    phone: '(11) 99999-0000',
    company: 'Empresa Exemplo',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '20px 25px', maxWidth: '580px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#0a1628', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.5', margin: '0 0 15px' }
const detailsBox = { backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '16px 20px', margin: '0 0 15px' }
const label = { fontSize: '12px', color: '#888888', margin: '8px 0 2px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }
const value = { fontSize: '15px', color: '#1a1a1a', margin: '0 0 10px', fontWeight: '500' as const }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0' }
