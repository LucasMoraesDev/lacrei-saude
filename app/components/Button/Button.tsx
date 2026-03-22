"use client";

import React from "react";
import styled, { css, keyframes } from "styled-components";
import { colors, typography, borderRadius, transitions, shadows } from "@/styles/tokens";

// Types
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
}

// Animations
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ripple = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

// Variant styles
const variantStyles = {
  primary: css`
    background-color: ${colors.primary};
    color: ${colors.white};
    border: 2px solid ${colors.primary};

    &:hover:not(:disabled) {
      background-color: ${colors.primaryDark};
      border-color: ${colors.primaryDark};
      box-shadow: ${shadows.green};
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      background-color: ${colors.primaryDark};
      transform: translateY(0);
    }
  `,
  secondary: css`
    background-color: ${colors.secondary};
    color: ${colors.white};
    border: 2px solid ${colors.secondary};

    &:hover:not(:disabled) {
      background-color: #6D28D9;
      border-color: #6D28D9;
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};

    &:hover:not(:disabled) {
      background-color: ${colors.primaryXLight};
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      background-color: ${colors.primaryLight};
      transform: translateY(0);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${colors.primary};
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${colors.primaryXLight};
    }

    &:active:not(:disabled) {
      background-color: ${colors.primaryLight};
    }
  `,
  danger: css`
    background-color: ${colors.error};
    color: ${colors.white};
    border: 2px solid ${colors.error};

    &:hover:not(:disabled) {
      background-color: #B91C1C;
      border-color: #B91C1C;
      transform: translateY(-1px);
    }
  `,
};

// Size styles
const sizeStyles = {
  sm: css`
    padding: 0.375rem 0.875rem;
    font-size: ${typography.sm};
    border-radius: ${borderRadius.base};
    gap: 0.375rem;
    min-height: 36px;
  `,
  md: css`
    padding: 0.625rem 1.25rem;
    font-size: ${typography.base};
    border-radius: ${borderRadius.md};
    gap: 0.5rem;
    min-height: 44px;
  `,
  lg: css`
    padding: 0.875rem 1.75rem;
    font-size: ${typography.lg};
    border-radius: ${borderRadius.lg};
    gap: 0.625rem;
    min-height: 52px;
  `,
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $isLoading?: boolean;
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontPrimary};
  font-weight: ${typography.semiBold};
  letter-spacing: 0.01em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    background-color ${transitions.fast},
    border-color ${transitions.fast},
    color ${transitions.fast},
    transform ${transitions.fast},
    box-shadow ${transitions.fast};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  white-space: nowrap;
  user-select: none;
  text-decoration: none;

  /* Variant styles */
  ${({ $variant }) => variantStyles[$variant]}

  /* Size styles */
  ${({ $size }) => sizeStyles[$size]}

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* Loading state */
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      cursor: wait;
      color: transparent;
    `}

  /* Focus visible */
  &:focus-visible {
    outline: 3px solid ${colors.primary};
    outline-offset: 3px;
  }

  /* Ripple effect */
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 10%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 0.5s;
  }

  &:active:not(:disabled)::after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`;

const Spinner = styled.span`
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      "aria-label": ariaLabel,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $size={size}
        $isLoading={isLoading}
        $fullWidth={fullWidth}
        disabled={isDisabled}
        aria-busy={isLoading}
        aria-label={ariaLabel}
        {...rest}
      >
        {isLoading && <Spinner aria-hidden="true" />}
        {!isLoading && leftIcon && (
          <IconWrapper aria-hidden="true">{leftIcon}</IconWrapper>
        )}
        {children}
        {!isLoading && rightIcon && (
          <IconWrapper aria-hidden="true">{rightIcon}</IconWrapper>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
