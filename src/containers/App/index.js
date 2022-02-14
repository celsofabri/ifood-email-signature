import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ClipboardJS from 'clipboard';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Select from 'components/Form/Select';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSignature,
  StyledSignatureHeader,
  StyledSignatureContainer,
  StyledSignatureFields,
  StyledSignatureActions,
  StyledSignaturePreview,
  StyledSignaturePreviewContainer,
  StyledSignatureImage,
  StyledSignatureInfo,
  StyledSignatureName,
  StyledSignatureRole,
  StyledSignatureEmail,
  StyledSignaturePhone,
  StyledNotice
} from './styled';
import colors from 'assets/global/colors';

const App = () => {
  const { register, watch } = useForm();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [copied, setCopied] = useState(false);
  const [company, setCompany] = useState('faster');
  const preview = useRef(null);
  const copyHTML = useRef(null);

  const phoneNumberMasked = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{3})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const clearRange = () => {
    setTimeout(() => {
      window.getSelection().removeAllRanges();
      setCopied(false);
    }, 5000);
  };

  const copyText = () => {
    window.getSelection().removeAllRanges();

    const container = preview.current;
    const range = document.createRange();

    range.selectNode(container);
    window.getSelection().addRange(range);
    document.execCommand('Copy');

    setCopied(true);
    clearRange();
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(copyHTML.current, {
      text: () => {
        return preview.current.outerHTML;
      }
    });

    clipboard.on('success', () => {
      setCopied(true);
      clearRange();
    });

    clipboard.on('error', (err) => {
      console.log(err);
      setCopied(false);
      clearRange();
    });
  }, [copyHTML]);

  return (
    <StyledSignature>
      <StyledSignatureHeader>
        <StyledWrapper>
          <Select
            name="company"
            size="300px"
            {...register('company', {
              onChange: (event) => {
                setCompany(event.target.value);
              }
            })}
          >
            <option value="faster">Faster</option>
            <option value="ifood">iFood</option>
          </Select>

          <StyledNotice copied={copied} company={company}>
            Copiado!
          </StyledNotice>
        </StyledWrapper>
      </StyledSignatureHeader>
      <StyledWrapper>
        <StyledSignaturePreview ref={preview}>
          <StyledSignaturePreviewContainer>
            <StyledSignatureImage>
              <a
                href="https://admin.fstr.rocks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    company === 'faster'
                      ? 'https://admin.fstr.rocks/img/faster-brand.044e20fc.svg'
                      : 'https://portal.ifood.com.br/static/media/ifood.480c271f.svg'
                  }
                  width={company === 'faster' ? 200 : 150}
                  height="auto"
                  alt="Faster"
                />
              </a>
            </StyledSignatureImage>
            <StyledSignatureInfo>
              <StyledSignatureName
                style={{
                  margin: '0',
                  color:
                    company === 'faster'
                      ? colors.blue400
                      : colors.red400
                }}
              >
                {name || 'Fabrício Bloisi'}
              </StyledSignatureName>

              <StyledSignatureRole
                style={{
                  margin: '2px 0',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: colors.black
                }}
              >
                {role || 'Chief Executive Officer'}
              </StyledSignatureRole>

              <StyledSignatureEmail
                style={{
                  margin: '2px 0',
                  fontSize: '15px'
                }}
              >
                {email || 'fabricio.bloisi@ifood.com.br'}
              </StyledSignatureEmail>

              {phone !== '' && (
                <StyledSignaturePhone
                  style={{
                    margin: '2px 0',
                    fontSize: '15px'
                  }}
                >
                  +55 {phone || '41 99999-9999'}
                </StyledSignaturePhone>
              )}
            </StyledSignatureInfo>
          </StyledSignaturePreviewContainer>
        </StyledSignaturePreview>
        <StyledSignatureContainer>
          <StyledSignatureFields>
            <Input
              type="text"
              name="name"
              placeholder="Insira seu nome"
              {...register('name', {
                onChange: () => {
                  setName(watch('name'));
                }
              })}
            />
          </StyledSignatureFields>
          <StyledSignatureFields>
            <Input
              type="text"
              name="role"
              placeholder="Insira seu cargo"
              {...register('role', {
                onChange: () => {
                  setRole(watch('role'));
                }
              })}
            />
          </StyledSignatureFields>
          <StyledSignatureFields>
            <Input
              type="email"
              name="email"
              placeholder="Insira seu e-mail"
              {...register('email', {
                onChange: () => {
                  setEmail(watch('email'));
                }
              })}
            />
          </StyledSignatureFields>

          <StyledSignatureFields>
            <Input
              type="tel"
              name="phone"
              maxLength="13"
              placeholder="Insira seu telefone (e.g.: 41 99999-9999)"
              {...register('phone', {
                onChange: (event) => {
                  event.target.value = phoneNumberMasked(
                    event.target.value
                  );
                  setPhone(watch('phone'));
                }
              })}
            />
          </StyledSignatureFields>
          <StyledSignatureFields>
            <StyledSignatureActions>
              <Button
                type="button"
                onClick={() => {
                  copyText();
                }}
                company={company}
              >
                Copiar assinatura
              </Button>
              <Button type="button" ref={copyHTML} company={company}>
                Copiar em HTML
              </Button>
            </StyledSignatureActions>
          </StyledSignatureFields>
        </StyledSignatureContainer>
      </StyledWrapper>
    </StyledSignature>
  );
};

export default App;
