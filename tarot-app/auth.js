// ============================================
// AUTHENTICATION UTILITIES
// Wild Mother Tarot - Authentication System
// ============================================

// API Configuration
const API_BASE_URL = 'https://ioslearningsandbox.azurewebsites.net';
const TENANT_SLUG = 'wildmother-tarot';

// ============================================
// TOKEN MANAGEMENT
// ============================================

/**
 * Get access token from localStorage
 */
function getAccessToken() {
    return localStorage.getItem('accessToken');
}

/**
 * Get refresh token from localStorage
 */
function getRefreshToken() {
    return localStorage.getItem('refreshToken');
}

/**
 * Store both access and refresh tokens
 */
function setTokens(accessToken, refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

/**
 * Clear all authentication tokens
 */
function clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}

// ============================================
// TOKEN VALIDATION
// ============================================

/**
 * Decode a JWT token
 * @param {string} token - The JWT token to decode
 * @returns {object|null} - Decoded token payload or null if invalid
 */
function decodeToken(token) {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}

/**
 * Check if a token is valid (exists and not expired)
 * @param {string} token - The JWT token to validate
 * @returns {boolean} - True if token is valid, false otherwise
 */
function isTokenValid(token) {
    if (!token) return false;

    const payload = decodeToken(token);
    if (!payload) return false;

    // Check expiration (exp claim is in seconds, Date.now() is in milliseconds)
    if (payload.exp && payload.exp * 1000 < Date.now()) {
        return false;
    }

    return true;
}

/**
 * Get user information from stored token
 * @returns {object|null} - User info {email, tenantId} or null if no valid token
 */
function getUserFromToken() {
    const token = getAccessToken();
    if (!token) return null;

    const payload = decodeToken(token);
    if (!payload) return null;

    return {
        email: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        tenantId: payload['TenantId']
    };
}

// ============================================
// AUTHENTICATION STATE
// ============================================

/**
 * Check if user is authenticated with a valid token
 * @returns {boolean} - True if authenticated, false otherwise
 */
function isAuthenticated() {
    const token = getAccessToken();
    return isTokenValid(token);
}

// ============================================
// API CALLS
// ============================================

/**
 * Login user with email and password
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise<object>} - Response object with success status and data/error
 */
async function login(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/Users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                data: data
            };
        } else {
            const errorMessage = data.errors
                ? data.errors.map(e => e.message).join(', ')
                : 'Invalid email or password';
            return {
                success: false,
                error: errorMessage
            };
        }
    } catch (error) {
        console.error('Login error:', error);
        return {
            success: false,
            error: 'Unable to connect to the server. Please try again later.'
        };
    }
}

/**
 * Register new user with email and password
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise<object>} - Response object with success status and data/error
 */
async function register(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/Users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
                tenantSlug: TENANT_SLUG
            })
        });

        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                data: data
            };
        } else {
            const errorMessage = data.errors
                ? data.errors.map(e => e.message).join(', ')
                : 'Registration failed. Please try again.';
            return {
                success: false,
                error: errorMessage
            };
        }
    } catch (error) {
        console.error('Registration error:', error);
        return {
            success: false,
            error: 'Unable to connect to the server. Please try again later.'
        };
    }
}

/**
 * Logout user by clearing tokens
 */
function logout() {
    clearTokens();
}

// ============================================
// UI HELPERS
// ============================================

/**
 * Display a message to the user
 * @param {string} elementId - ID of the message container element
 * @param {string} text - Message text to display
 * @param {string} type - Message type ('success' or 'error')
 */
function showMessage(elementId, text, type) {
    const messageDiv = document.getElementById(elementId);
    if (messageDiv) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
    }
}
