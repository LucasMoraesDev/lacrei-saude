const usePathname = jest.fn(() => "/");
const useRouter = jest.fn(() => ({
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
}));
const useSearchParams = jest.fn(() => new URLSearchParams());

module.exports = { usePathname, useRouter, useSearchParams };
