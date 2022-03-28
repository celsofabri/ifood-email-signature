import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ClipboardJS from 'clipboard';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Select from 'components/Form/Select';
import { phoneNumberMasked } from 'utils/helpers';
import { StyledWrapper } from 'assets/global/styled';
import colors from 'assets/global/colors';
import fonts from 'assets/global/fonts';
import {
  StyledSignature,
  StyledSignatureHeader,
  StyledSignatureMain,
  StyledSignatureContainer,
  StyledSignatureFields,
  StyledSignatureActions,
  StyledSignaturePreview,
  StyledSignatureImage,
  StyledSignatureInfo,
  StyledSignatureName,
  StyledSignatureRole,
  StyledSignatureEmail,
  StyledSignaturePhone,
  StyledSignatureSocial,
  StyledSignatureSocialItem,
  StyledNotice
} from './styled';
import logoIfood from 'https://raw.githubusercontent.com/celsofabri/ifood-email-signature/master/src/assets/images/ifood-logo.png';
import logoFaster from 'https://raw.githubusercontent.com/celsofabri/ifood-email-signature/master/src/assets/images/faster-logo.png';
import iconFacebook from 'https://raw.githubusercontent.com/celsofabri/ifood-email-signature/master/src/assets/images/icon-facebook.png';
import iconTwitter from 'https://raw.githubusercontent.com/celsofabri/ifood-email-signature/master/src/assets/images/icon-twitter.png';
import iconInstagram from 'https://raw.githubusercontent.com/celsofabri/ifood-email-signature/master/src/assets/images/icon-instagram.png';
import iconYouTube from 'https://raw.githubusercontent.com/celsofabri/ifood-email-signature/master/src/assets/images/icon-youtube.png';

const App = () => {
  const { register, watch } = useForm();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [copied, setCopied] = useState(false);
  const [company, setCompany] = useState('ifood');
  const [social, setSocial] = useState(true);
  const preview = useRef<any>(null);
  const copyHTML = useRef<any>(null);
  const items = [
    {
      label: 'iFood',
      value: 'ifood'
    },
    {
      label: 'Faster',
      value: 'faster'
    }
  ];

  const clearRange = () => {
    setTimeout(() => {
      window.getSelection()?.removeAllRanges();
      setCopied(false);
    }, 5000);
  };

  const copyText = () => {
    window.getSelection()?.removeAllRanges();

    const container: HTMLElement | null = preview.current;
    const range = document.createRange();

    if (container) {
      range.selectNode(container);
      window.getSelection()?.addRange(range);
      document.execCommand('Copy');
    }

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
            options={items}
            {...register('company', {
              onChange: (event) => {
                setCompany(event.target.value);
              }
            })}
          />
          <StyledNotice copied={copied} company={company}>
            Copiado!
          </StyledNotice>
        </StyledWrapper>
      </StyledSignatureHeader>
      <StyledSignatureMain>
        <StyledWrapper>
          <StyledSignatureContainer>
            <StyledSignatureFields>
              <Input
                type="text"
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
                  children="Copiar assinatura"
                />
                <Button
                  type="button"
                  ref={copyHTML}
                  company={company}
                  children="Copiar em HTML"
                />
              </StyledSignatureActions>
            </StyledSignatureFields>
          </StyledSignatureContainer>
          <StyledSignaturePreview ref={preview}>
            <StyledSignatureImage>
              <a
                href={
                  company === 'ifood'
                    ? 'https://ifood.com.br/'
                    : 'https://admin.fstr.rocks/'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={company === 'ifood' ? logoIfood : logoFaster}
                  width={company === 'ifood' ? 150 : 200}
                  height="auto"
                  alt={company === 'ifood' ? 'iFood' : 'Faster'}
                />
              </a>
            </StyledSignatureImage>
            <StyledSignatureInfo>
              <StyledSignatureName
                style={{
                  margin: '0',
                  fontFamily: fonts.primary,
                  color:
                    company === 'ifood'
                      ? colors.red400
                      : colors.blue400
                }}
              >
                {name || 'Fabrício Bloisi'}
              </StyledSignatureName>

              <StyledSignatureRole
                style={{
                  margin: '2px 0',
                  fontFamily: fonts.secondary,
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
                  fontFamily: fonts.secondary,
                  fontSize: '15px'
                }}
              >
                {email || 'fabricio.bloisi@ifood.com.br'}
              </StyledSignatureEmail>

              {phone !== '' && (
                <StyledSignaturePhone
                  style={{
                    margin: '2px 0',
                    fontFamily: fonts.secondary,
                    fontSize: '15px'
                  }}
                >
                  +55 {phone || '41 99999-9999'}
                </StyledSignaturePhone>
              )}

              {social && (
                <StyledSignatureSocial>
                  <StyledSignatureSocialItem
                    href="https://www.facebook.com/iFood"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={iconFacebook}
                      width="24"
                      height="24"
                      alt="Facebook"
                    />
                  </StyledSignatureSocialItem>
                  <StyledSignatureSocialItem
                    href="https://twitter.com/iFood"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={iconTwitter}
                      width="24"
                      height="24"
                      alt="Twitter"
                    />
                  </StyledSignatureSocialItem>
                  <StyledSignatureSocialItem
                    href="https://www.instagram.com/iFoodBrasil"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={iconInstagram}
                      width="24"
                      height="24"
                      alt="Instagram"
                    />
                  </StyledSignatureSocialItem>
                  <StyledSignatureSocialItem
                    href="https://www.youtube.com/ifood"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={iconYouTube}
                      width="24"
                      height="24"
                      alt="YouTube"
                    />
                  </StyledSignatureSocialItem>
                </StyledSignatureSocial>
              )}
            </StyledSignatureInfo>
          </StyledSignaturePreview>
        </StyledWrapper>
      </StyledSignatureMain>
    </StyledSignature>
  );
};

export default App;
